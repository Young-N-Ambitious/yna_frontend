import { connect } from "@dagger.io/dagger"


connect(async (client) => {

  // creating a cache volume 
  const nodeCache = client.cacheVolume("node")

  // use a node:16-slim container
  const source = client.container()
    .from("node:16-slim")
    .withMountedDirectory('/src', client.host().directory('.', { exclude: ["node_modules/", "ci/"] }))
    .withMountedCache("/src/node_modules", nodeCache)
  // install application dependencies at working directory
  const runner = source
    .withWorkdir("/src")
    .withExec(["npm", "install"])

  // run application tests : no test yet
//   const test = runner
//     .withExec(["npm", "test", "--", "--watchAll=false"])

  //build and write the build output to the host
  await runner
    .withExec(["npm", "run", "build"])
    .directory("./build")
    .export("./build")

  // publish 
  const imageRef = await client.container()
    .from("nginx:1.23-alpine")
    .withDirectory('/usr/share/nginx/html', client.host().directory('./build'))
    .publish('ttl.sh/yna-' + Math.floor(Math.random() * 10000000) + ':1d')
  console.log(`Published image to: ${imageRef}`)
  // highlight-end 

}, { LogOutput: process.stdout })
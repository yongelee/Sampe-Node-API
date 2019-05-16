var rp = require("request-promise");

const startServer = require("../startServer");
let server;
beforeAll(() => {
  const port = process.env.PORT || 4000;
  server = startServer().listen(port, () => {
    console.log("server started on port 4000");
  });
});

afterAll(() => {
  server.close();
});

describe("the main test", () => {
  test("make it run", () => {
    expect(1 + 2).toBe(3);
  });
});

describe("Make an API call", () => {
  test("The call to index works", async () => {
    const response = await rp("http://localhost:4000/");

    console.log(response);

    expect(response).not.toBeNull();
  });
});

const request = require("supertest");

const server = "http://localhost:3000";

describe("Route integration", () => {
  describe("/", () => {
    describe("GET", () => {
      it("responds with 200 status and text/html content type", () => {
        return request(server)
          .get("/")
          .expect("Content-Type", /text\/html/)
          .expect(200);
      });
    });
  });

  describe("/api", () => {
    describe("GET", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .get("/api")
          .expect("Content-Type", /application\/json/)
          .expect(200);
      });

      // helper test function used for the test below
      const testFunc = (res) => {
        expect(res.body[0]).toHaveProperty("item", "testFood1");
        // .res.body.toHaveProperty('item', 'testFood1');
        expect(res.body[1]).toHaveProperty("item", "testFood2");
      };

      xit("responds with testFood1 & testFood2 in a JSON object", () => {
        return request(server).get("/api").expect(200).expect(testFunc);
      });
    });

    describe("POST", () => {
      xit("responds with 200 status and application/json content type", () => {
        return request(server)
          .post("/api/food")
          .send({ item: "orange" })
          .expect("Content-Type", /application\/json/)
          .expect(200);
      });

      const testFunc = (res) => {
        console.log(res.body);
        expect(res.body).toHaveProperty("item", "mango");
      };

      xit("responds with mango in a JSON object", () => {
        return request(server)
          .post("/api/food")
          .send({ item: "mango" })
          .expect(200)
          .expect(testFunc);
      });

      it("responds to invalid request with 400 status and error message in body", () => {
        return request(server).post("/api/food").send({ items: 2 }).expect(400);
      });
    });

    describe("PUT", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .put("/api/food/grape4")
          .send({ item: "grape4" })
          .expect("Content-Type", /application\/json/)
          .expect(200);
      });

      it("responds with 400 status and application/json content type upon invalid params", () => {
        return request(server)
          .put("/api/food/papaya")
          .send({ item: "papaya2" })
          .expect("Content-Type", /application\/json/)
          .expect(400);
      });

    xdescribe("DELETE", () => {
      it("responds with 400 status and application/json content type", () => {
        return request(server)
          .delete("/api/food/orange")
          // .send({ item: "orange" })
          .expect(400);
      });
    });

      /*
        req.query will return a JS object after the query string is parsed.

        /user?name=tom&age=55 - req.query would yield {name:"tom", age: "55"}

        req.params will return parameters in the matched route. If your route is /user/:id and you make a request to /user/5 - req.params would yield {id: "5"}
      */
    });
  });
});

//  res.status(200).json(res.locals.food);

/*
      [
        {
          item: 'testFood1',
          type: '',
          quantity: 0,
          date: '2021-05-25T22:47:31.964Z',
          price: 0,
          expiration: '2021-06-08T22:47:31.964Z',
          status: 'to buy',
          preference: '',
          outcome: '',
          _id: '60ad82c4f28be43db357fcff',
          __v: 0
        },
        {
          item: 'testFood2',
          type: '',
          quantity: 0,
          date: '2021-05-25T22:47:31.964Z',
          price: 0,
          expiration: '2021-06-08T22:47:31.964Z',
          status: 'to buy',
          preference: '',
          outcome: '',
          _id: '60ad82c8f28be43db357fd00',
          __v: 0
        }
      ]

  */

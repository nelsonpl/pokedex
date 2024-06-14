import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import * as nock from "nock";
import { PokedexApiModule } from "../src/pokedex-api.module";

const pokemonList = {
  count: 1,
  next: "",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ],
};

const pokemon = {
  id: 1,
  base_experience: 64,
  height: 7,
  weight: 69,
  name: "bulbasaur",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
};

describe("Api (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PokedexApiModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("list pokemons", () => {
    nock("https://pokeapi.co/api/v2/pokemon")
      .get("?offset=0&limit=20")
      .reply(200, pokemonList);

    return request(app.getHttpServer())
      .get(`/pokemon`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual({
          count: 1,
          results: [
            {
              name: "bulbasaur",
              url: "https://pokeapi.co/api/v2/pokemon/1/",
            },
          ],
        });
      });
  });

  it("get by id", () => {
    nock("https://pokeapi.co/api/v2/pokemon").get("/1").reply(200, pokemon);

    return request(app.getHttpServer())
      .get(`/pokemon/1`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it("get by name", () => {
    nock("https://pokeapi.co/api/v2/pokemon").get("/bulbasaur").reply(200, pokemon);

    return request(app.getHttpServer())
      .get(`/pokemon/bulbasaur`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toBeDefined();
      });
  });
});

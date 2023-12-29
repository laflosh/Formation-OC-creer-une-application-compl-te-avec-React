import {rest} from "msw";
import {setupServer} from "msw/node";
import { render,waitFor,screen } from "@testing-library/react";

import Freelances from ".";
import { ThemeProvider } from "../../utils/context";

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
];

const server = setupServer(

    rest.get("http://localhost:8000/freelances", (req, res, ctx) => {
        return res(ctx.json({freelancersList:freelancersMockedData}));
    })
);

// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen());
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers());
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close());

test("Should render withoutcrash", async () => {
    render(
        <ThemeProvider>
            <Freelances/>
        </ThemeProvider>
    )
    expect(screen.getByTestId("loader")).toBeTruthy();
    await waitFor(() => {
        expect(screen.getByText("Harry Potter")).toBeTruthy();
    })
});

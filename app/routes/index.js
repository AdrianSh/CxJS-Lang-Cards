import { Route, PureContainer, Sandbox, Window } from "cx/widgets";

import AppLayout from "../layout";
import Default from "./default";
import About from "./about";
import GithubLangs from "./github-langs";

export default (
  <cx>
    <PureContainer outerLayout={AppLayout}>
      <Sandbox key-bind="url" storage-bind="pages">
        <Route url-bind="url" route="~/">
          <Default />
        </Route>
        <Route url-bind="url" route="~/about">
          <About />
        </Route>
        <Route url-bind="url" route="~/GitHub/:lang">
          <GithubLangs />
        </Route>
      </Sandbox>
    </PureContainer>
  </cx>
);

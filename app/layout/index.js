import { HtmlElement, ContentPlaceholder, Link } from "cx/widgets";
import { Url, History } from "cx/data";
export default (
  <cx>
    <div class="app">
      <header ws>
        <img class="logo" src="~/assets/img/cxjs.svg" />
        <Link
          onClick={() =>
            History.pushState(undefined, undefined, Url.resolve("~/"))
          }
          href="~/"
          url-bind="url"
        >
          Home
        </Link>
        <Link
          onClick={() =>
            History.pushState(
              undefined,
              undefined,
              Url.resolve("~/GitHub/java")
            )
          }
          href="~/GitHub/java"
          url-bind="url"
        >
          Java
        </Link>
        <Link
          onClick={() =>
            History.pushState(
              undefined,
              undefined,
              Url.resolve("~/GitHub/javascript")
            )
          }
          href="~/GitHub/javascript"
          url-bind="url"
        >
          Javascript
        </Link>
        <Link
          onClick={() =>
            History.pushState(undefined, undefined, Url.resolve("~/GitHub/C++"))
          }
          href="~/GitHub/C++"
          url-bind="url"
        >
          C++
        </Link>
        <Link
          onClick={() =>
            History.pushState(
              undefined,
              undefined,
              Url.resolve("~/GitHub/kotlin")
            )
          }
          href="~/GitHub/kotlin"
          url-bind="url"
        >
          Kotlin
        </Link>
        <Link
          onClick={() =>
            History.pushState(undefined, undefined, Url.resolve("~/GitHub/php"))
          }
          href="~/GitHub/php"
          url-bind="url"
        >
          PHP
        </Link>
      </header>
      <main>
        <ContentPlaceholder />
      </main>
      <footer />
    </div>
  </cx>
);

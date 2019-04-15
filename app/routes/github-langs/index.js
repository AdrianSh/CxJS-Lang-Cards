import {
  HtmlElement,
  FlexRow,
  Repeater,
  TextField,
  Checkbox,
  Button,
  Section,
  Heading,
  Icon
} from "cx/widgets";
import Controller from "./Controller";

export default (
  <cx>
    <div class="csb-todo-wrap" controller={Controller}>
      <div class="csb-todo">
        <h1 text-bind="$route.lang" />

        <FlexRow spacing wrap>
          <Repeater records-bind="$page.github.datalang.items">
            <Section mod="card" class="lang">
              <FlexRow putInto="header">
                <Heading level="2" text-bind="$record.name" />
              </FlexRow>
              <FlexRow spacing target="tablet" class="flex-wrap">
                <div
                  style="flex: 1;"
                  class="dont-break-out"
                  text-bind="$record.description"
                />
                <div style="flex: 1;">
                  <img class="avatar" src-bind="$record.owner.avatar_url" />
                </div>
              </FlexRow>
              <a
                href-bind="$record.clone_url"
                target="_new"
                class="github-link"
              >
                <img src="http://i64.tinypic.com/atlulw.png" />
                <span text-bind="$record.full_name" />
              </a>
            </Section>
          </Repeater>
        </FlexRow>
      </div>
    </div>
  </cx>
);

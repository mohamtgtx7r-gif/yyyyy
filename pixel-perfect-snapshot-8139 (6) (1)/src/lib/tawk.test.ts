import { test } from "node:test";
import assert from "node:assert/strict";
import { configureAgentMessages, type TawkApi } from "./tawk";

test("each agent message shows and maximizes visitor chat, not page load", () => {
  const actions: string[] = [];
  const api: TawkApi = {
    showWidget: () => actions.push("show"),
    maximize: () => actions.push("maximize"),
  };
  configureAgentMessages(api);
  assert.deepEqual(actions, []);
  assert.equal(typeof api.onChatMessageAgent, "function");
  api.onChatMessageAgent?.({ text: "Hello" });
  api.onChatMessageAgent?.({ text: "Another message" });
  assert.deepEqual(actions, ["show", "maximize", "show", "maximize"]);
});
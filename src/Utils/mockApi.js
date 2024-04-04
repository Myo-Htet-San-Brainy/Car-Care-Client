import { apiReply } from "../dummyData";

export function createChatApiMock(action, userId) {
  return apiReply;
}

export function continueChatApiMock(sessionId, userMessage) {
  return apiReply;
}

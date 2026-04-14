"""LLM Actions routes - legitimately uses sibling openai module."""
from services.llm_actions.src.llm_actions.openai import call_openai


def handle_request():
    return call_openai("hello")

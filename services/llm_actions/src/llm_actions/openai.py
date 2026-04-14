"""Internal OpenAI wrapper for the LLM Actions service."""


def call_openai(prompt: str) -> str:
    return f"response to: {prompt}"

"""AI Gateway client - imports the openai pip package, NOT llm_actions' openai module."""
import openai

from services.ai_gateway.src.ai_gateway.other import wrapper

with wrapper():
  client = openai.OpenAI(api_key="key")

  response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "What is the capital of France?"}
    ]
  )

  print(response.choices[0].message.content)
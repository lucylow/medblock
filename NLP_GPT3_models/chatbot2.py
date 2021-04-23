import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
  engine="davinci",
  prompt="You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\n\n\n\n\n\nFriend: Let's watch a movie.\nI am bored.\n",
  temperature=0.4,
  max_tokens=332,
  top_p=1,
  frequency_penalty=0.5,
  presence_penalty=0,
  stop=["You:"]
)

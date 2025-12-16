def build_prompt(persona, task):
    return f"""
You are a {persona['role']}.

Tone:
{persona['tone']}

Reasoning Depth:
{persona['reasoning_depth']}

Output Style:
{persona['output_style']}

Decision Style:
{persona['decision_style']}

TASK:
{task}

Respond with a structured, professional answer.
"""

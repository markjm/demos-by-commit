"""LLM Actions Routes"""
# This is inside services/llm_actions/server/routes.py
# It tries to import from "server" (meaning services/llm_actions/server)
# But with package auto-discovery, it could resolve to services/graphql/server!
from server import api

def setup_routes():
    return api.handle_request()

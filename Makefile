# josefonte.pt — common dev commands.
# Toolchain (Node, Bun) is pinned in mise.toml; commands run through mise.

BUN := mise exec -- bun

.DEFAULT_GOAL := help
.PHONY: help setup install dev build start lint test clean

help: ## List available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-9s\033[0m %s\n", $$1, $$2}'

setup: ## Install the toolchain (mise) and dependencies
	mise install
	$(BUN) install

install: ## Install dependencies
	$(BUN) install

dev: ## Run the dev server (http://localhost:3000)
	$(BUN) run dev

build: ## Production build
	$(BUN) run build

start: ## Serve the production build
	$(BUN) run start

lint: ## Run ESLint
	$(BUN) run lint

test: ## Run Bun's test runner
	$(BUN) test

clean: ## Remove build output and dependencies
	rm -rf .next node_modules

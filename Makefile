# Makefile for VR/AR Enterprise Platform

.PHONY: help install dev start test lint clean docker-build docker-up docker-down

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	npm install

setup: ## Run setup script
	./scripts/setup.sh

dev: ## Start development server
	npm run dev

start: ## Start production server
	npm start

test: ## Run tests
	npm test

test-unit: ## Run unit tests
	npm run test:unit

test-integration: ## Run integration tests
	npm run test:integration

test-coverage: ## Run tests with coverage
	npm test -- --coverage

lint: ## Run linter
	npm run lint

lint-fix: ## Fix linting issues
	npm run lint:fix

format: ## Format code
	npm run format

build: ## Build for production
	./scripts/build.sh

clean: ## Clean build artifacts
	npm run clean
	rm -rf node_modules
	rm -rf dist
	rm -rf coverage

docker-build: ## Build Docker image
	docker-compose build

docker-up: ## Start Docker containers
	docker-compose up -d

docker-down: ## Stop Docker containers
	docker-compose down

docker-logs: ## View Docker logs
	docker-compose logs -f

docs: ## Generate documentation
	npm run docs

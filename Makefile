# Define the Docker Compose project name
PROJECT_NAME=macheight-assesmet

.PHONY: start stop exec

start:
	docker-compose up

stop:
	docker-compose down

exec:
	docker-compose exec app sh

test:
	docker-compose exec app npm run test && open ./coverage/lcov-report/index.html

lint:
	docker-compose exec app npm run lint
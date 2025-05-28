FROM python:3.12

# Set the working directory
WORKDIR /app
# Copy the rest of the project files
COPY ../../backend /app
RUN pip install poetry


RUN poetry install --no-root

CMD ["sh", "-c", "poetry run python manage.py migrate && poetry run python manage.py runserver 0.0.0.0:8000"]
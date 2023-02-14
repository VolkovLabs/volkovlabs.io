FROM rayproject/ray:1.10.0-py38

## Working directory
WORKDIR /app
COPY requirements.txt ./

## Install Requirements
RUN pip3 install -r requirements.txt

## Copy script
COPY ./app.py ./

## Start
CMD ["python3", "./app.py"]

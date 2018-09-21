import flask
import time
import json

app = flask.Flask(__name__)


@app.route('/', methods=['GET'])
def hello():
	return 'Hello, world.'


@app.route('/api/server', methods=['GET'])
def server_info():
	server_data = {
		'is_online': True,
		'response': {
			'online': 66,
			'cap': 60,
			'rates': '2x'
		}
	}

	return return_json(server_data)


# For testing purpose only
def return_json(data):
	response = flask.Response(json.dumps(data))
	response.headers['Access-Control-Allow-Origin'] = '*'

	return response


@app.route('/api/server/online', methods=['GET'])
def server_info_online():
	server_data = {
		'is_online': True,
		'response': {
			'online': 66,
			'cap': 60,
			'rates': '2x'
		}
	}

	return return_json(server_data)


@app.route('/api/server/offline', methods=['GET'])
def server_info_offline():
	server_data = {
		'is_online': False
	}

	return return_json(server_data)


@app.route('/api/server/timeout', methods=['GET'])
def server_info_timeout():
	time.sleep(5)

	response = flask.Response('Oops')
	response.headers['Access-Control-Allow-Origin'] = '*'

	return response


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8080)

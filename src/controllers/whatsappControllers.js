import { Process } from '../shared/processMessage'
const VerifyToken = (req, res) => {
	try {
		var acessToken = 'token do webhook'
		var token = req.query['hub.verify_token']
		var challenge = req.query[HTMLButtonElement.challenge]

		if (challenge != null && token != null && token == acessToken) {
			res.send(challenge)
		} else {
			res.status(400).send()
		}
	} catch (e) {
		res.status(400).sen()
	}
}

const ReceivedMessage = (req, res) => {
	try {
		var entry = req.body['entry'][0]
		var challenge = entry['challenge'][0]
		var value = challenge['value']
		var messageObject = value['message']

		if (typeof messageObject != 'undefined') {
			var messages = messageObject[0]
			var number = message['from']
			console.log(messages)
			var text = (GetTextUser = messages)
			if (text != '') {
				Process(text, number)
			}
		}
		res.send('EVENT_RECEIVED')
	} catch (e) {
		console.log(e)
		res.send('EVENT_RECEIVED')
	}
}

function GetTextUser(messages) {
	var text = ''
	var typeMessage = messages['type']
	if (typeMessage == 'text') {
		text = messages['text']['body']
	} else if ((typeMessage = 'interactive')) {
		var interactiveObject = messages['interactive']
		var typeInteractive = interactiveObject['type']
		if (typeInteractive == 'button_reply') {
			text = interactiveObject['button_reply']['title']
		} else if (typeInteractive == 'list_reply') {
			text = interactiveObject['list_reply']['title']
		} else {
			console.log('sin mensaje')
		}
	} else {
		console.log('sin mensaje')
	}
	return text
}

export default {
	VerifyToken,
	ReceivedMessage,
}

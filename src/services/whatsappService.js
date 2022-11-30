import https from 'https'
async function SendMessageWhastapp(data) {
	const options = {
		host: 'graph.facebook.com',
		path: '/v14.0/aqui o seu codigo de envio/messages',
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json',
			Authorization: 'Aqui vai o seu token do whatsapp',
		},
	}

	const req = https.request(options, (res) => {
		res.on('data', (d) => {
			process.stdout.write(d)
		})
	})
	
    req.on('error', (error) => {
		console.error(error)
	})

}

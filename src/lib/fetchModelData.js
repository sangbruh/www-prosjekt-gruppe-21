/**
	* FetchModel - Fetch a model from the web server.
	*     url - string - The URL to issue the GET request.
	* Returns: a Promise that should be filled
	* with the response of the GET request parsed
	* as a JSON object and returned in the property
	* named "data" of an object.
	* If the requests has an error the promise should be
	* rejected with an object contain the properties:
	*    status:  The HTTP response status
	*    statusText:  The statusText from the xhr request
	*
*/


function fetchModel(url) {
	return new Promise(function (resolve, reject) {
		const address = `http://localhost:3001${url}`;

		const xhr = new XMLHttpRequest();
		xhr.responseType = 'text';

		xhr.onreadystatechange = () => {
			if (xhr.readyState !== 4) {
				return;
			}

			if (xhr.status !== 200) {
				reject(new Error({status: 501, statusText: 'Not Implemented'}));
			} else {
				resolve({data: JSON.parse(xhr.responseText)});
			}
		};

		xhr.open('GET', address);
		xhr.send();
	});
}

export default fetchModel;

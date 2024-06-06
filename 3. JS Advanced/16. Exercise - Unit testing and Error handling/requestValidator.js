function requestValidator(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validUriRegex = /^(\*|[A-Za-z0-9.]+)$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validMessageRegex = /^[^<>\\&'"]*$/;

    if (!request.method || !validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.uri || !validUriRegex.test(request.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!request.version || !validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (request.message === undefined || !validMessageRegex.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

let test = requestValidator({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
});
console.log(test);
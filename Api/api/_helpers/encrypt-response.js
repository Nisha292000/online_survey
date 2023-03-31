const encryptResponse = (res, message, code, data = []) => {

  let sendObject = {
    status_code: code,
    message: message,
    data: data,
  };

  res.send(
    sendObject
  );
}
module.exports = encryptResponse;

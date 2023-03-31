const encryptResponse = (res, message, code, data = []) => {

  let sendObject = {
    status_code: code,
    message: message,
    data: data,
  };

  res.send(
    (
        message == 'Terms & conditions have been agreed successfully.' ||
        message == 'Terms & conditions have already been agreed.' ||
        message == 'Terms & conditions agreement link is invalid.' ||
        message == 'Your email address has been confirmed successfully.' ||
        message == 'The email confirmation link is invalid.' ||
        message == 'The email confirmation link has expired.' ||
        message == 'Your email address has already been confirmed.'
    )
    ? message : sendObject
  );
}
module.exports = encryptResponse;

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Auto deployed project  again changed to test🚀"
    }),
  };
};

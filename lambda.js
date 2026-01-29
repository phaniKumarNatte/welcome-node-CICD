exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Welcome to my Node.js Lambda app 🚀"
    }),
  };
};

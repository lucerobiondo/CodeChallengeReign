module.exports = {
target: 'node',
plugins: [
    new webpack.ProvidePlugin({
       "React": "react",
    }),
 ],
};
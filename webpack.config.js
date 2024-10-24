const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js", // 기본 엔트리 파일
    app: "./src/app.js", // 다른 엔트리 파일 추가
    over: "./src/over.js", // over.js도 번들링
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // 엔트리마다 다른 번들 파일 생성
    clean: true, // 빌드 시 dist 폴더를 정리
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 모든 .js 파일에 대한 규칙
        exclude: /node_modules/, // node_modules 제외
        use: {
          loader: "babel-loader", // Babel을 통해 최신 JS 문법 지원
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // CSS 파일을 처리하기 위한 로더
      },
      {
        test: /\.(png|jpg|gif)$/i, // 이미지 파일 처리
        type: "asset/resource", // 이미지를 dist 폴더로 복사
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // index.html을 기준으로 번들 삽입
      filename: "index.html", // 빌드 후의 파일명
      chunks: ["index"], // 해당 html에 포함될 자바스크립트 번들
    }),
    new HtmlWebpackPlugin({
      template: "./main.html", // main.html을 기준으로 번들 삽입
      filename: "main.html",
      chunks: ["app"], // app.js가 포함될 번들
    }),
    new HtmlWebpackPlugin({
      template: "./over.html",
      filename: "over.html",
      chunks: ["over"], // over.js가 포함될 번들
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css", // 번들된 CSS 파일 이름
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/img", to: "img" }, // public/img 폴더의 파일을 dist/img로 복사
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // 정적 파일을 제공하는 디렉토리
    },
    port: 3000, // 개발 서버 포트 설정
  },
  mode: "development", // 개발 모드 설정
};

<div align="center">

  [![License: MIT](https://img.shields.io/github/license/serpapi/google-reviews-analyzer)](https://github.com/serpapi/review-analyzer/blob/master/LICENSE)

</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/serpapi/google-reviews-analyzer/main/public/logo.png" width="150" alt="Logo">
  <h3>Google Reviews Analyzer</h3>
</div>

## Introduction

It gather the reviews of businesses using [SerpApi](https://serpapi.com/). And then structure the data to feed into [OpenAI](https://openai.com/) LLM with the use of [Langchain](https://github.com/hwchase17/langchain) LLM framework. With custom prompting, we produce the result as below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fserpapi%2Fgoogle-reviews-analyzer&env=SERPAPI_KEY,OPENAI_API_KEY&envDescription=Signup%20for%20OpenAI(https%3A%2F%2Fplatform.openai.com%2F)%20and%20get%20free%20credits%20upon%20sign%20up%20with%20SerpApi(https%3A%2F%2Fserpapi.com%2F)&project-name=google-reviews-analyzer&repository-name=google-reviews-analyzer&redirect-url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdIbgvx2plCp-3-rD4D8peU8i1EsoL5muwhqKixobDrLhpLSA%2Fviewform%3Fusp%3Dsf_link)

## Example Reults

<img src="https://raw.githubusercontent.com/serpapi/google-reviews-analyzer/main/public/sample.png" width="500" alt="Logo">

### Sample analysis
```
1. Food Quality (👍): ⭐⭐⭐⭐⭐
2. Service (👍): ⭐⭐⭐⭐
3. Cleanliness (👎): ⭐⭐
4. Price (👍): ⭐⭐⭐⭐
5. Taste (👍): ⭐⭐⭐⭐⭐
6. Portions (👍): ⭐⭐⭐⭐
7. Variety (👍): ⭐⭐⭐
8. Atmosphere (👍): ⭐⭐⭐⭐
9. Value (👍): ⭐⭐⭐⭐
10. Parking (👍): ⭐⭐⭐
```

## Launch it with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fserpapi%2Fgoogle-reviews-analyzer&env=SERPAPI_KEY,OPENAI_API_KEY&envDescription=Signup%20for%20OpenAI(https%3A%2F%2Fplatform.openai.com%2F)%20and%20get%20free%20credits%20upon%20sign%20up%20with%20SerpApi(https%3A%2F%2Fserpapi.com%2F)&project-name=google-reviews-analyzer&repository-name=google-reviews-analyzer&redirect-url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdIbgvx2plCp-3-rD4D8peU8i1EsoL5muwhqKixobDrLhpLSA%2Fviewform%3Fusp%3Dsf_link)

or run it locally

## Prerequisite

Before running the application, we have to get the necessary API key:
1. Duplicate the file `.env.example` and rename it to `.env`
2. We need 2 API keys from [SerpApi](https://serpapi.com/) and [OpenAI](https://platform.openai.com/) for `SERPAPI_KEY` and `OPENAI_API_KEY` respectively.

## Installation

First, install the dependencies

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building Blocks

- [Next.JS](https://nextjs.org/) - React framework for the web application
- [Langchain](https://github.com/hwchase17/langchain) - Framework for the LLM
- [OpenAI](https://openai.com/) - LLM provider
- [SerpApi](https://serpapi.com/) - Data provider for the businesses reviews on Google. Related documentations: [Google Maps API](https://serpapi.com/google-maps-api) and [Google Maps Reviews API](https://serpapi.com/google-maps-reviews-api).

## Future Improvements

Quick analysis is fine, it helps you to understand the review as quick and intuitive as possible. But what if you can chat with it? Sort of like interviewing your customers. I believe we can get more in depth understanding out of it.
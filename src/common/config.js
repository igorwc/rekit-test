const dev = {
    s3: {
      BUCKET: "desenvolvimento"
    },
    apiGateway: {
      REGION: "YOUR_DEV_API_GATEWAY_REGION",
      URL: "YOUR_DEV_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "YOUR_DEV_COGNITO_REGION",
      USER_POOL_ID: "YOUR_DEV_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "YOUR_DEV_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "YOUR_DEV_IDENTITY_POOL_ID"
    }
  };
  
  const prod = {
    s3: {
      BUCKET: "producao"
    },
    apiGateway: {
      REGION: "YOUR_PROD_API_GATEWAY_REGION",
      URL: "YOUR_PROD_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "YOUR_PROD_COGNITO_REGION",
      USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
    }
  };
  
  const hom = {
    s3: {
      BUCKET: "homologalçao"
    },
    apiGateway: {
      REGION: "YOUR_PROD_API_GATEWAY_REGION",
      URL: "YOUR_PROD_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "YOUR_PROD_COGNITO_REGION",
      USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
    }
  };

  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : (process.env.REACT_APP_STAGE === 'hom')? hom : dev;
  
    console.log('ambiente:');
    console.log( process.env.REACT_APP_STAGE);
    console.log(config)
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };
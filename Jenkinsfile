pipeline {
  agent any
  environment {
    MODULE_NAME = "faker-logs:$GIT_COMMIT"
  }
  stages {
    stage('build') {
      steps {
        sh "docker build -t ${MODULE_NAME} ."
      }
    }
    stage('test') {
      steps {
        sh "docker run --rm ${MODULE_NAME} npm run test"
      }
    }
  }
  post {
    always {
      script {
        try {
          sh "docker rmi $MODULE_NAME"
        } catch (Exception e) {
          echo "could not delete docker image $MODULE_NAME"
        }
      }
    }
  }
}
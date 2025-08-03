pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                echo "Installing dependencies..."
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                echo "Running build script..."
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'npm test'
            }
            post {
                always {
                    echo 'Test stage complete.'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded.' 
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

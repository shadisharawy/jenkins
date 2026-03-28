
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'develop', url: 'https://github.com/shadisharawy/jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    pkill -f "node app.js" || true
                    nohup npm start > app.log 2>&1 &
                '''
            }
        }
    }
}

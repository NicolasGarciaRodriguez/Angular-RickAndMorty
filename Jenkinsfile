pipeline {

    agent any

    stages {

        stage('Verify branch') {

            steps {

                echo "$GIT_BRANCH"

            }
        }

        stage ('Build') {

            steps {

                sh(script: """
                    npm install
                    ng build --prod
                """)

            }
            post {

                success {

                    echo "Build done"

                }
                
                failure {

                    echo "Build failed"

                }
            }
        }
    }
}
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
                    cd RickandMorty
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

        stage ('Unit tests') {

            steps {

                sh(script: """
                    cd RickandMorty
                    npm run test
                """)

            }

            post {

                success {

                    echo "Test passed"

                }

                failure {

                    echo "Test failed"

                }
            }
        }

        stage ('Local deploy') {

            steps {

                sh(script: """
                    npm install http-server -g
                    http-server RickandMorty/dist/rickAndMorty
                """)

            }
        }
    }
}
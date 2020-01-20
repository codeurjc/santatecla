cd ../front

:: Copy generated resources on static
del /Q ..\back\src\main\resources\static\new\*
copy /Y dist\front\* ..\back\src\main\resources\static\new

cd ../back

:: Create jar
docker run -it --rm -v "%cd%":/usr/src/project -w /usr/src/project maven:alpine mvn package

:: Copy jar and images
copy target\back-0.0.1-SNAPSHOT.jar ..\docker\build\
cd ../docker

:: Delete containers and back image
FOR /f "tokens=*" %%i IN ('docker ps -aq') DO docker stop %%i
FOR /f "tokens=*" %%i IN ('docker ps -aq') DO docker rm %%i
docker rmi -f back

:: Build back image
docker build -t back .

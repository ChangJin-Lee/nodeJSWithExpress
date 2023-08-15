# nodeJSWithExpress

| Browser App | Node.js |
|:--:|:--:|
| Dom | No Dom |
| Window | No Window |
| Interactive Apps | Server Side Apps |
| No Filesystem | Filesystem |
| Fragmentation | versions |
| ES6 Modules | CommonJS |


- REPL
    - Read Eval Print Loop 이라는 단어의 줄임말 입니다.
        - 입력(read) 평가(eval) 출력(print) 반복(loop)
    - 컴파일 과정 없이 즉석에서 코드를 입력해 결과를 바로 알 수 있는 방식을 말합니다.
    개발시에 코드를 즉시 테스트 함으로써 편리한 소스 코드를 디버깅 할 수 있습니다.

- *Modules - Encapsulated Code (Only share minimum)*
    - OS, PATH, FS, HTTP 를 사용 가능함.
    - https://nodejs.org/api/http.html

- OS module
    - file system에서도 잘 쓰이고 현재 OS 에 대한 정보가 다 담겨 있음.

- http module

- npm
    
    ```
    npm - global command, comes with node 
    npm --version
    
    local dependency - use it only in this particular project 
    npm i <packageName>
    
    global dependency - use it in any project
    npm install -g «packageName>
    sudo install -g <packageName> (mac)
    
    package.ison - manifest file (stores important info about project/package)'
    manual approach (create package. json in the root, create properties etc)
    pm init (step by step, press enter to skip)
    pm init -y (everything default)
    ```
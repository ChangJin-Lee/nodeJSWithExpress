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

- nodemon
    
    ```jsx
    npm i nodemon -D
    ```
    
- npm에 nodemon 라이브러리를 사용하게 되면 js파일의 내용이 변경될 때마다 이것을 감지하고 서버를 자동으로 restart 시켜주게 됩니다. (html, css 파일 등은 감지 안됨)

- global하게 설치도 가능함.
    
    ```jsx
    npm install -g packageName
    ```
    

- package-lock .json에 모든 dependencies에 대한 정보가 들어 있음.

- Event Loop
    - non-blocking I/O operation이 가능하게 해줌.
    흔히 **`Node.js`**를 **싱글 스레드 논 블로킹**이라고 한다. **`Node.js`**는 **하나의 스레드**로 동작하지만 I/O 작업이 발생한 경우 이를 **비동기적**으로 처리할 수 있다. 분명 하나의 스레드는 하나의 실행 흐름만을 가지고 있고 **파일 읽기**와 같이 **기다려야 하는 작업**을 실행하면 그 작업이 끝나기 전에는 아무것도 할 수 없어야만 한다. 그러나 **`Node.js`**는 하나의 스레드만으로 여러 **비동기 작업**들을 블로킹 없이 수행할 수 있고 그 기반에는 **이벤트 루프**가 존재한다.
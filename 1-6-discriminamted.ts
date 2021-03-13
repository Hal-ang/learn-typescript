{
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    // key의 유무로 구분 if 'response' in state...

    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}

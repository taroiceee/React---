//离开前保存提示
//在用到的组件中添加：useUnsavedChangesPrompt(isFormDirty);
import { useEffect } from 'react';
import { useNavigate, useBlocker } from 'react-router-dom';

const useUnsavedChangesPrompt = (when: boolean) => {
  const blocker = useBlocker(when);

  useEffect(() => {
    // 修正比较逻辑
    if (blocker.state !== 'blocked') return;

    const proceed = window.confirm('您有未保存的更改，确定要离开吗？');

    if (proceed) {
      blocker.proceed();
    } else {
      blocker.reset();
    }
  }, [blocker]);
};

export default useUnsavedChangesPrompt;

import {useEffect, useRef, useState} from 'react';

export function useTextSelection() {
  /**
   * Selection API 사용 공부하기
   * 출처: https://storybook.react-laag.com/?path=/docs/text-selection--page
   */
  const ref = useRef();
  const [selectedRange, setSelectedRange] = useState(null);
  useEffect(() => {
    function handleChange() {
      const selection = window.getSelection();
      /**
       * selection이 없거나
       * isCollapsed가 true(즉, selection이 있어도 block이 무너졌을 경우)거나
       * selection 대상 node의 일부가 selection의 일부가 아닐 경우
       */
      if (!selection || selection.isCollapsed || !selection.containsNode(ref.current, true)) {
        setSelectedRange(null);
        return;
      }
      setSelectedRange(selection.getRangeAt(0));
    }
    document.addEventListener('selectionchange', handleChange);
    return () => document.removeEventListener('selectionchange', handleChange);
  }, []);

  return {ref, selectedRange};
}

import styled from 'styled-components'

export const Container = styled.div`
  @import '@radix-ui/colors/blackA.css';
  @import '@radix-ui/colors/mauve.css';
  @import '@radix-ui/colors/violet.css';

  /* reset */
  button {
    all: unset;
  }

  .SelectTrigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 13px;
    line-height: 1;
    height: 35px;
    gap: 5px;
    background-color: white;
    color: var(--violet11);
    box-shadow: 0 2px 10px var(--blackA7);
  }
  .SelectTrigger:hover {
    background-color: var(--mauve3);
  }
  .SelectTrigger:focus {
    box-shadow: 0 0 0 2px black;
  }
  .SelectTrigger[data-placeholder] {
    color: var(--violet9);
  }

  .SelectIcon {
    color: Var(--violet11);
  }

  .SelectContent {
    overflow: hidden;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
      0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  }

  .SelectViewport {
    padding: 5px;
  }

  .SelectItem {
    font-size: 13px;
    line-height: 1;
    color: var(--violet11);
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 35px 0 25px;
    position: relative;
    user-select: none;
  }
  .SelectItem[data-disabled] {
    color: var(--mauve8);
    pointer-events: none;
  }
  .SelectItem[data-highlighted] {
    outline: none;
    background-color: var(--violet9);
    color: var(--violet1);
  }

  .SelectLabel {
    padding: 0 25px;
    font-size: 12px;
    line-height: 25px;
    color: var(--mauve11);
  }

  .SelectSeparator {
    height: 1px;
    background-color: var(--violet6);
    margin: 5px;
  }

  .SelectItemIndicator {
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .SelectScrollButton {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background-color: white;
    color: var(--violet11);
    cursor: default;
  }
`

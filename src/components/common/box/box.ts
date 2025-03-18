import { TBoxProps } from '@/types/components';
import styled from 'styled-components';

export const Box = styled.div<TBoxProps>`
    position: ${({ $pos }) => $pos};
    align-items: ${({ $align }) => $align};
    display: ${({ $display = 'flex' }) => $display};
    flex-direction: ${({ $direction }) => $direction};
    justify-content: ${({ $justify }) => $justify};
    gap: ${({ $gap }) => $gap};
    grid-template-columns: ${({ $gridCols }) => $gridCols};
    height: ${({ $height }) => $height};
    margin: ${({ $m }) => $m};
    margin-bottom: ${({ $mb }) => $mb};
    margin-top: ${({ $mt }) => $mt};
    padding: ${({ $p }) => $p};
    width: ${({ $width }) => $width};
    max-width: ${({ $maxWidth }) => $maxWidth};
    min-width: ${({ $minWidth }) => $minWidth};
    background: ${({ $bg }) => $bg};
    border-radius: ${({ $rounded }) => $rounded};
    z-index: ${({ $zIndex }) => $zIndex};
    * label {
        ${({ $childrenLabels }) => $childrenLabels};
    }
`;

export const FullScreenBox = styled(Box)<{ isFullscreen: boolean }>`
    width: 100%;
    height: ${({ isFullscreen }) => (isFullscreen ? '100%' : 'auto')};
    background: ${({ isFullscreen }) => (isFullscreen ? 'white' : 'transparent')}; /* Ensure background is white in fullscreen */
`;

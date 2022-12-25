<template>
    <div class="relative">
        <span
            class="icon flex justify-center items-center duration-200 relative"
            :class="[
                'icon-' + icon,
                {
                    'cursor-pointer': button,
                    'text-secondary-t': !color,
                    'hover:text-primary-t': !hoverColor && !disabled,
                    'group-hover:text-primary-t': group && !disabled,
                    'rounded-full hover:bg-white/10': round && !circle,
                    '!text-primary-t': isActive,
                    '!text-tertiary-t !cursor-default': disabled,
                    'opacity-50': darker,
                    '!justify-end': end
                }
            ]"
            :style="[
                {
                    fontSize: size + 'px',
                    width: size + 'px',
                    height: size + 'px',
                    color: color,
                    backgroundColor: circle
                },
                { '--hover-color': hoverColor }
            ]"
        ></span>
    </div>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        icon: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: ''
        },
        hoverColor: {
            type: String,
            default: '#cbd5e1'
        },
        button: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        end: {
            type: Boolean,
            default: false
        },
        group: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: String,
            default: ''
        },
        box: {
            type: Number,
            default: 24
        },
        isActive: {
            type: Boolean,
            default: false
        },
        darker: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
@import '@/assets/icons/style.css';

.icon:hover {
    color: var(--hover-color) !important;
}
</style>

<!-- import PropTypes from 'prop-types';
import '@/assets/icons/style.css';
import { css } from '@emotion/react';
import clsx from 'clsx';

const Icon = ({
    icon,
    size,
    color,
    hoverColor,
    button,
    disabled,
    end,
    className,
    group,
    round,
    circle,
    box,
    children,
    isActive,
    darker
}) => {
    return (
        <div className="relative">
            <span
                className={clsx(
                    `icon-${icon} flex justify-center items-center duration-200 relative`,
                    button && 'cursor-pointer',
                    className,
                    !color && 'text-secondary-t',
                    !hoverColor && !disabled && 'hover:text-primary-t',
                    group && !disabled && 'group-hover:text-primary-t',
                    disabled && '!text-tertiary-t !cursor-default',
                    round && !circle && 'rounded-full hover:bg-white/10',
                    isActive && '!text-primary-t',
                    darker && 'opacity-50',
                    end && '!justify-end'
                )}
                css={css`
                    color: ${color};
                    ${button &&
                    !disabled &&
                    `
                        &:hover {
                            color: ${hoverColor};
                        }
                    `}
                    font-size: ${size}px;
                    ${(size || box) &&
                    `
                        width: ${box || size}px;
                        height: ${box || size}px;
                        `}
                    transform-style: preserve-3d;
                `}>
                {children}

                <div
                    className={clsx('box absolute')}
                    css={css`
                        ${circle &&
                        !round &&
                        (box || size) &&
                        `
                        border-radius: 50%;
                        background: ${circle};
                        transform: translateZ(-10px);
                        width: ${box || size}px;
                        height: ${box || size}px;`}
                    `}></div>
            </span>
            <div className="hidden text-secondary-t"></div>
        </div>
    );
};

Icon.defaultProps = {
    size: 16,
    disabled: false
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon; -->

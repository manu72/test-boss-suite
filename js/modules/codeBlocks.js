// Code block interaction module

export class CodeBlockManager {
    constructor() {
        this.codeBlocks = document.querySelectorAll('.code-example');
        this.init();
    }

    init() {
        this.setupCodeBlocks();
    }

    setupCodeBlocks() {
        this.codeBlocks.forEach(block => {
            // Create wrapper for code block
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            
            // Add copy button
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = 'Copy';
            copyButton.addEventListener('click', () => this.copyCode(block, copyButton));
            
            // Wrap the code block
            block.parentNode.insertBefore(wrapper, block);
            wrapper.appendChild(block);
            wrapper.appendChild(copyButton);
            
            // Add syntax highlighting classes
            this.highlightSyntax(block);
        });
    }

    async copyCode(block, button) {
        try {
            await navigator.clipboard.writeText(block.textContent);
            
            // Show success feedback
            button.innerHTML = '✓ Copied!';
            button.classList.add('success');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.innerHTML = 'Copy';
                button.classList.remove('success');
            }, 2000);
        } catch (error) {
            console.error('Failed to copy code:', error);
            button.innerHTML = '✗ Error';
            button.classList.add('error');
        }
    }

    highlightSyntax(block) {
        // Simple syntax highlighting
        const code = block.innerHTML;
        const highlightedCode = code
            .replace(/(\/\/.+)/g, '<span class="comment">$1</span>')
            .replace(/('.*?'|".*?")/g, '<span class="string">$1</span>')
            .replace(/\b(const|let|var|function|return|if|else|async|await)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(true|false|null|undefined)\b/g, '<span class="boolean">$1</span>');
        
        block.innerHTML = highlightedCode;
    }
}

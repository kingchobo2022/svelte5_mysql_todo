<script>
    import { enhance } from "$app/forms";
    let text = $state('');
    let isSubmitting = $state(false);
</script>

<form
    method="POST"
    action="?/create"
    use:enhance={() => {
        isSubmitting = true;
        return async ( {update}) => {
            await update();
            text = '';
            isSubmitting = false;
        };
    }}
>
    <div class="form-group">
        <input type="text" name="text" 
            bind:value={text}
            placeholder="할 일을 입력하세요..." 
            disabled={isSubmitting}
            required> 
        <button type="submit" disabled={isSubmitting || !text.trim()}>
            {isSubmitting ? '추가 중...' : '추가'}
        </button>
    </div>
</form>

<style>
    .form-group {
        display: flex;
        gap: 0.5rem;
    }
    input {
        flex: 1;
        padding: 0.75rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.2s;
    }
    input:focus {
        outline: none;
        border-color: #667eea;
    }

    button {
        padding: 0.75rem 1.5rem;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
    }

    button:hover:not(:disabled) {
        background: #5a67d8;
    }

    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .error {
        color: #e53e3e;
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
</style>
<script>
    import { enhance } from "$app/forms";

    let { todo } = $props();

    let itemClass = $derived(todo.completed ? 'todo-item completed' : 'todo-item');
</script>

<div class={itemClass}>
    <form method="POST" action="?/toggle" use:enhance>
        <input type="hidden" name="id" value={todo.id}>
        <button type="submit" class="toggle-btn" aria-label="완료 상태 토글">
            {todo.completed ? '✅' : '⬜'}
        </button>
    </form>

    <span class="todo-text">{todo.text}</span>

    <form method="POST" action="?/delete" use:enhance>
        <input type="hidden" name="id" value={todo.id}>
        <button type="submit" class="delete-btn" aria-label="삭제">
            🗑️
        </button>
    </form>
</div>

<style>
    .todo-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: white;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        transition: all 0.2s;
    }
    .todo-item:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .todo-item.completed .todo-text {
        text-decoration: line-through;
        color: #a0aec0;
    }

    .todo-text {
        flext: 1;

        font-size: 1rem;
    }

    .toggle-btn,
    .delete-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background 0.2s;
    }

    .toggle-btn:hover {
        background: #f7fafc;
    }

    .delete-btn:hover {
        background: #fed7d7;
    }

    form {
        display: contents;
    }
</style>


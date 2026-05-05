<script>
    import TodoForm from "$lib/components/TodoForm.svelte";

    // +page.server.js의 load 함수에서 반환한 데이터
    let { data, form } = $props();

    let totalCount = $derived(data.todos.length);
    let completedCount = $derived(data.tools.filter((t) => t.completed).length);
    let remainingCount = $derived(totalCount - completedCount);
</script>

<svelte:head>
    <title>Todo App - Svelte 5 + MySQL</title>
</svelte:head>

<main>
    <div class="container">
        <header>
            <h1>📝 할 일 관리</h1>
            <p class="subtitle">Svelte 5 + MySQL로 만든 Todo 앱</p>
        </header>

        <section class="form-section">
            <TodoForm error={form?.error} />
        </section>

        <div class="stats">
            <span>전체 00개</span>
            <div class="divider">|</div>
            <div class="remaining">남은 할 일 개</div>
            <div class="divider">|</div>
            <div class="completed">완료 00개</div>
        </div>

        <section class="todo-list">
            ~~
        </section>

    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: #f7fafc;
        color: #2d3748;
    }

    main {
        min-height: 100vh;
        padding: 2rem 1rem;
    }
    .container {
        max-width: 600px;
        margin: 0 auto;
    }

    header {
        text-align: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 0.25rem;
    }

    .subtitle {
        color: #718096;
        font-size: 0.9rem;
    }

    .form-section {
        margin-bottom: 1.5rem;
    }

    .stats {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: #718096;
    }
    .divider {
        color: #e2e8f0;
    }
    .remaining {
        color: #667eea;
    }
    .completed {
        color: #48bb78;
    }
    .todo-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .empty-state {
        text-align: center;
        padding: 3rem 1rem;
        color: #a0aec0;
    }
    .empty-hint {
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
    .error-message {
        text-align: center;
        color: #e53e3e;
        padding: 1rem;
        background: #fff5f5;
        border-radius: 8px;
    }
</style>

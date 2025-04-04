document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('element');
    const originPoint = document.getElementById('origin-point');
    const xOriginInput = document.getElementById('x-origin');
    const yOriginInput = document.getElementById('y-origin');
    const xUnitSelect = document.getElementById('x-unit');
    const yUnitSelect = document.getElementById('y-unit');
    const transformSelect = document.getElementById('transform-type');
    const resetBtn = document.getElementById('reset-btn');

    // Make element draggable
    let isDragging = false;
    element.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mouseup', () => isDragging = false);
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const container = document.querySelector('.visualization');
        const rect = container.getBoundingClientRect();
        element.style.left = `${e.clientX - rect.left - 50}px`;
        element.style.top = `${e.clientY - rect.top - 50}px`;
        updateTransformation();
    });

    function updateTransformation() {
        const xValue = xOriginInput.value;
        const yValue = yOriginInput.value;
        const xUnit = xUnitSelect.value;
        const yUnit = yUnitSelect.value;
        const transform = transformSelect.value;

        element.style.transformOrigin = `${xValue}${xUnit} ${yValue}${yUnit}`;
        element.style.transform = transform;
        updateOriginPoint();
    }

    function updateOriginPoint() {
        const xValue = parseFloat(xOriginInput.value) || 0;
        const yValue = parseFloat(yOriginInput.value) || 0;
        const xUnit = xUnitSelect.value;
        const yUnit = yUnitSelect.value;

        const elementRect = element.getBoundingClientRect();
        const containerRect = document.querySelector('.visualization').getBoundingClientRect();

        const xPos = elementRect.left - containerRect.left + 
                   (xUnit === '%' ? (elementRect.width * xValue / 100) : xValue);
        const yPos = elementRect.top - containerRect.top + 
                   (yUnit === '%' ? (elementRect.height * yValue / 100) : yValue);

        originPoint.style.left = `${xPos}px`;
        originPoint.style.top = `${yPos}px`;
    }

    function reset() {
        xOriginInput.value = '50';
        yOriginInput.value = '50';
        xUnitSelect.value = '%';
        yUnitSelect.value = '%';
        transformSelect.value = 'rotate(45deg)';
        element.style.left = '150px';
        element.style.top = '150px';
        updateTransformation();
    }

    // Event listeners
    [xOriginInput, yOriginInput, xUnitSelect, yUnitSelect, transformSelect].forEach(el => {
        el.addEventListener('input', updateTransformation);
        el.addEventListener('change', updateTransformation);
    });
    resetBtn.addEventListener('click', reset);

    // Initialize
    updateTransformation();
});